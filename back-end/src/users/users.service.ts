import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Contact } from 'src/contacts/entities/contact.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return await user.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async findOneByPhone(phone: string) {
    return await this.userModel.findOne({ phone: phone });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }

  async addContactorToUser(userId: string, newContact: any): Promise<User> {
    // Encontre o usuário pelo ID
    const usuario = await this.userModel.findById(userId);

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }
    // Verificar se o contato já existe no sistema
    const existingContact = await this.contactModel.findOne({
      phone: newContact.phone,
    });

    if (!existingContact) {
      throw new HttpException('Contato não encontrado', HttpStatus.BAD_REQUEST);
    }

    usuario.contacts.push(existingContact);
    await usuario.save();
    return usuario;
  }
}
