import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Model } from 'mongoose';
import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel('Usuario') private readonly userModel: Model<Usuario>){}


  //Creamos un documento en la base de datos 
  async create(nombre: string, apellido: string, matricula: number) {
    const nuevoUsuario = new this.userModel({nombre, apellido, matricula});
    const result = await nuevoUsuario.save();

    return result.id as string;
  }

  async findAll() {
    const usuarios = await this.userModel.find().exec();
    
    return usuarios.map((usuario) =>({
      id:usuario.id,
      nombre:usuario.nombre,
      apellido:usuario.apellido,
      matricula:usuario.matricula,
    }));
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
