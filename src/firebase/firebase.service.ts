import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService implements OnModuleInit {
  private db: admin.database.Database;
  private credentials: admin.ServiceAccount;

  constructor(private readonly configService: ConfigService) {
    this.credentials = {
      projectId: this.configService.get('FIREBASE_PROJECT_ID'),
      clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
      privateKey: this.configService.get('FIREBASE_PRIVATE_KEY'),
    };
  }

  onModuleInit() {
    admin.initializeApp({
      credential: admin.credential.cert(this.credentials),
      databaseURL: this.configService.get('FIREBASE_DATABASE_URL'),
    });

    this.db = admin.database();
  }

  getDatabase(): admin.database.Database {
    return this.db;
  }
}
