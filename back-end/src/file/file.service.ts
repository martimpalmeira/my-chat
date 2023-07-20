import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';

@Injectable()
export class FileService {
  async readFileContent(filePath: string): Promise<string> {
    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      return fileContent;
    } catch (error) {
      console.error('Erro ao ler o arquivo:', error);
      throw error;
    }
  }
}
