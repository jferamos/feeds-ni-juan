import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@app/core';
import { GraphService } from './graph/graph-service.service';

@NgModule({
  imports: [ CoreModule ],
  providers: [
  ] 
})
export class RepositoryModule {
  constructor(@Optional() @SkipSelf() parentModule: RepositoryModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
