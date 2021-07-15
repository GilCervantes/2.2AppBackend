import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, MongooseModule.forRoot('mongodb://localhost:27017/nest_app')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
