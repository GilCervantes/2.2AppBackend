import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuario.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./usuario.model";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Usuario', schema: UserSchema}])
    ],
    controllers:[UsuarioController],
    providers: [UsuarioService]
})
export class UsuarioModule{}