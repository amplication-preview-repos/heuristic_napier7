import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoadServiceBase } from "./base/load.service.base";

@Injectable()
export class LoadService extends LoadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
