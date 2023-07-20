import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const contact = new this.contactModel(createContactDto);

      await contact.save();
    } catch (error) {
      if (error.code === 11000) {
        // Trate o erro de violação de unicidade
        throw new HttpException(
          'Erro de unicidade: número de telefone duplicado',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          `Erro ao salvar o contato: ${error}`,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async findAll() {
    return await this.contactModel.find();
  }

  async findOne(id: string) {
    return await this.contactModel.findById(id);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    try {
      const usuarios = await this.userModel.find({
        'contacts.phone': updateContactDto.email,
      });
      for (const usuario of usuarios) {
        const contatoIndex = usuario.contacts.findIndex(
          (c) => c.email.toString() === updateContactDto.email,
        );
        if (contatoIndex > -1) {
          usuario.contacts[contatoIndex] = new Contact(
            updateContactDto.name,
            updateContactDto.email,
            updateContactDto.profileDescription,
          );
          usuario.save();
        }
      }
      return await this.contactModel.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateContactDto,
        },
        { new: true },
      );
    } catch (error) {
      if (error.code === 11000) {
        // Trate o erro de violação de unicidade
        throw new HttpException(
          'Erro de unicidade: número de telefone duplicado',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          `Erro ao editar o contato: ${error}`,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async remove(id: string) {
    return await this.contactModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
