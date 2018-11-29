import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users.service';
import { StateService } from './state.service';
import { PlayerService } from './player.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { LayoutService } from './layout.service';

const SERVICES = [
  UserService,  
  StateService,  
  PlayerService,  
  ProfitBarAnimationChartService,
  LayoutService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
