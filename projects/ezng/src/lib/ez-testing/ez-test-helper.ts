import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class EzTestHelper<T> {
  constructor(private fixture: ComponentFixture<T>) { }

  async find(name: string): Promise<DebugElement> {
    this.fixture.detectChanges();
    await this.fixture.whenStable();
    return this.fixture.debugElement.query(By.css(`[name=${name}]`));
  }

  async required(name: string): Promise<boolean> {
    const child = await this.find(name);
    return child ? child.context.required : undefined;
  }

  async valid(name: string): Promise<boolean> {
    const child = await this.find(name);
    return child ? child.context.valid : undefined;
  }

  async invalid(name: string): Promise<boolean> {
    const child = await this.find(name);
    return child ? child.context.invalid : undefined;
  }

  async value(name: string): Promise<any> {
    const child = await this.find(name);
    return child ? child.context.value : undefined;
  }

  async shown(name: string): Promise<boolean> {
    const child = await this.find(name);
    return child !== null;
  }
}
