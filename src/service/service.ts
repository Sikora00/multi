import { Module } from '@nestjs/common';

export interface Service {
  logSomething(): void;
}

export class Services {
  private readonly services: Service[] = [];

  addService(service: Service) {
    this.services.push(service);
  }

  getServices(): Service[] {
    return this.services;
  }
}

@Module({
  providers: [Services],
  exports: [Services],
})
export class ServiceModule {
  constructor(private readonly services: Services) {}
}
