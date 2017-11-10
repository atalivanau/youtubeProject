import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {VideoService} from './services/video.service';
import {SearchComponent} from './components/search/search.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ItemComponent} from './components/item/item.component';
import {MainComponent} from './components/main.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'video/:id', component: ItemComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        DashboardComponent,
        ItemComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        MatCardModule,
        MatButtonModule
    ],
    providers: [VideoService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
