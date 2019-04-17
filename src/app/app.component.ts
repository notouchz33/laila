import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StudentPage } from '../pages/student/student';
import { ExamPage } from '../pages/exam/exam';
import { MoneyPage } from '../pages/money/money';
import { MemoPage } from '../pages/memo/memo';
import { GradePage } from '../pages/grade/grade';
import { RegisterPage } from '../pages/register/register';
import { IndexPage } from '../pages/index';
import { SstudentPage } from '../pages/sstudent/sstudent';
import { SexamPage } from '../pages/sexam/sexam';
import { SmemoPage } from '../pages/smemo/smemo';
import { SgradePage } from '../pages/sgrade/sgrade';
import { ChargePage } from '../pages/charge/charge';
import { SmoneyPage } from '../pages/smoney/smoney';
import { GpaPage } from '../pages/gpa/gpa';
import { CountPage } from '../pages/count/count';
import { GraphPage } from '../pages/graph/graph';
import { GpaxPage } from '../pages/gpax/gpax';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =  LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
      public splashScreen: SplashScreen)
      
      
      {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Student', component: StudentPage },
      { title: 'Exam', component: ExamPage },
      { title: 'Money', component: MoneyPage },
      { title: 'Memo', component: MemoPage },
      { title: 'Grade', component: GradePage },
      { title: 'Register', component: RegisterPage },
      { title: 'Index', component: IndexPage },
      { title: 'Sstudent', component: SstudentPage },
      { title: 'Sexam', component: SexamPage },
      { title: 'Smemo', component: SmemoPage },
      { title: 'Sgrade', component: SgradePage },
      { title: 'Smoney', component: SmoneyPage },
      { title: 'Charge', component: ChargePage },
      { title: 'Gpa', component: GpaPage },
      { title: 'Count', component: CountPage },
      { title: 'Graph', component: GraphPage },
      { title: 'Gpax', component: GpaxPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
