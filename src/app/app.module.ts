import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { IndexPage } from '../pages/index/index';
import { StudentPage } from '../pages/student/student';
import { ExamPage } from '../pages/exam/exam';
import { MoneyPage } from '../pages/money/money';
import { MemoPage } from '../pages/memo/memo';
import { GradePage } from '../pages/grade/grade';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { SstudentPage } from '../pages/sstudent/sstudent';
import { SexamPage } from '../pages/sexam/sexam';
import { SmoneyPage } from '../pages/smoney/smoney';
import { SmemoPage } from '../pages/smemo/smemo';
import { SgradePage } from '../pages/sgrade/sgrade';
import { RegisterServiceProvider } from '../providers/register-service/register-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { StudentserviceProvider } from '../providers/studentservice/studentservice';
import { ExamserviceProvider } from '../providers/examservice/examservice';
import { MoneyserviceProvider } from '../providers/moneyservice/moneyservice';
import { MemoserviceProvider } from '../providers/memoservice/memoservice';
import { ChargeserviceProvider } from '../providers/chargeservice/chargeservice';
import { ChargePage } from '../pages/charge/charge';
import { GpaPage } from '../pages/gpa/gpa';
import { CountPage } from '../pages/count/count';
import { GradeserviceProvider } from '../providers/gradeservice/gradeservice';
import { GpaserviceProvider } from '../providers/gpaservice/gpaservice';
import { GraphPage } from '../pages/graph/graph';
import { GpaxPage } from '../pages/gpax/gpax';
import { GlobalvarProvider } from '../providers/globalvar/globalvar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    IndexPage,
    StudentPage,
    ExamPage,
    MoneyPage,
    MemoPage,
    GradePage,
    SstudentPage,
    SexamPage,
    SmoneyPage,
    SmemoPage,
    SgradePage,
    ChargePage,
    GpaPage,
    CountPage,
    GraphPage,
    GpaxPage
   

  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],


  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    IndexPage,
    StudentPage,
    ExamPage,
    MoneyPage,
    MemoPage,
    GradePage,
    SstudentPage,
    SexamPage,
    SmoneyPage,
    SmemoPage,
    SgradePage,
    ChargePage,
    GpaPage,
    CountPage,
    GraphPage,
    GpaxPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegisterServiceProvider,
    LoginServiceProvider,
    StudentserviceProvider,
    ExamserviceProvider,
    MoneyserviceProvider,
    MemoserviceProvider,
    ChargeserviceProvider,
    ChargeserviceProvider,
    GradeserviceProvider,
    GpaserviceProvider,
    GlobalvarProvider
  ]
})
export class AppModule {}
