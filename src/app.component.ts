import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { Course } from './models/course.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseCardComponent, ModalComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  isMenuOpen = signal(false);
  currentYear = new Date().getFullYear();
  selectedCourse = signal<Course | null>(null);

  showTeacherMore = signal(false);

  toggleTeacherMore() {
    this.showTeacherMore.set(!this.showTeacherMore());
  }

backgroundUrl = new URL('../assets/images/background.jpg', import.meta.url).href;

  courses = signal<Course[]>([
    {
      id: 1,
      title: 'Англійська для подорожей',
      image: 'assets/images/travel.png',
      shortDescription: '10 уроків, які зроблять ваші подорожі легшими та приємнішими! Цей курс для вас, якщо ви плануєте поїздку за кордон, але хвилюєтеся через мовний бар\'єр.',
      longDescription: 'Курс "Англійська для подорожей" допоможе вам подорожувати вільно та без стресу, розвине розмовні навички та збагатить словниковий запас. Програма курсу розроблена, щоб дати вам впевненість у найпоширеніших ситуаціях під час поїздок.',
      details: [
        'Живе спілкування з першого заняття',
        'Найнеобхідніші фрази для подорожей',
        '10 тем: аеропорт, готель, транспорт, кафе, шопінг, екстрені ситуації тощо',
        'Рольові ігри, діалоги, картки, listening',
        'Акцент на розмовні навички та словниковий запас'
      ],
      courseDetails: '<ul><li><strong>Урок 1 – В аеропорту</strong><br>Тема: Check-in, паспортний контроль, рейс<br>Ціль: навчити спілкуватися в аеропорту<br>5 запитань, які можна задати в аеропорту</li><li><strong>Урок 2 – У готелі</strong><br>Тема: бронювання, заселення, скарги</li><li><strong>Урок 3 – У ресторані / кафе</strong><br>Тема: замовлення їжі, алергії, рахунок</li><li><strong>Урок 4 – Транспорт</strong><br>Тема: таксі, автобус, метро, навігація</li><li><strong>Урок 5 – Як запитати дорогу</strong><br>Тема: орієнтація, карти, пояснення</li><li><strong>Урок 6 – Шопінг</strong><br>Тема: покупки, розміри, ціни, знижки</li><li><strong>Урок 7 – Надзвичайні ситуації</strong><br>Тема: лікарня, поліція, загублені речі</li><li><strong>Урок 8 – Small Talk з місцевими / туристами 💬</strong><br>Тема: знайомство, легкі розмови</li><li><strong>Урок 9 – Екскурсії, музеї, пам’ятки</strong><br>Тема: замовлення турів, опис вражень</li><li><strong>Урок 10 – Повна симуляція поїздки</strong><br>Тема: інтеграція всіх тем</li></ul>'
    },
    {
      id: 2,
      title: 'Індивідуальні уроки Business English',
      image: 'assets/images/business.png',
      shortDescription: 'Хочете впевнено спілкуватися англійською на роботі, писати професійні листи чи брати участь у ділових зустрічах? Запрошую на індивідуальні заняття.',
      longDescription: 'Персональний навчальний план під ваші цілі (робота, кар\'єра, співбесіда, бізнес-подорожі). Розвиток ключових навичок: презентації, переговори, дзвінки, наради, імейли, small talk. Заняття включають живі діалоги, рольові ігри, кейс-стаді та актуальну бізнес-лексику з використанням сучасних автентичних матеріалів. Гнучкий графік занять онлайн — навчайтеся з будь-якої точки світу.',
      courseDetails: '<ul><li><strong>1-2 уроки – BRENDS</strong> (Talk about your favourite brands)<br>LANGUAGE WORK: Words that go with brand, product and market; Present simple and present continuous<br>SKILLS: Taking part in meetings</li><li><strong>3-4 уроки – TRAVEL</strong> (Talk about your travel experiences)<br>LANGUAGE WORK: British and American travel words; Talking about the future<br>SKILLS: Telephoning: making arrangements</li><li><strong>5-6 уроки – CHANGE</strong> (Discuss attitudes to change in general and at work)<br>LANGUAGE WORK: Words for describing change; Past simple and present perfect<br>SKILLS: Managing meetings</li><li><strong>7-8 уроки – ORGANISATION</strong> (Talk about status within an organisation)<br>LANGUAGE WORK: Words and expressions to describe company structure; Noun combinations<br>SKILLS: Socialising: introductions and networking</li><li><strong>9-10 уроки – ADVERTISING</strong> (Discuss authentic advertisements)<br>LANGUAGE WORK: Words and expressions for talking about advertising; Articles<br>SKILLS: Starting and structuring a presentation</li><li><strong>11-12 уроки – MONEY</strong> (Do a Quiz and discuss attitudes to money)<br>LANGUAGE WORK: Words and expressions for talking about finance<br>SKILLS: Dealing with figures and describing trends</li><li><strong>13-14 уроки – CULTURES</strong> (Discuss the importance of cultural awareness in business)<br>LANGUAGE WORK: Idioms for talking about business relationships; Advice, obligation and necessity<br>SKILLS: Social English</li><li><strong>15-16 уроки – HUMAN RESOURCES</strong> (Talk about job interviews)<br>LANGUAGE WORK: Expressions for talking about job applications; -ing forms and infinitives<br>SKILLS: Getting information on the telephone</li><li><strong>17-18 уроки – INTERNATIONAL MARKETS</strong> (Discuss the development of international markets)<br>LANGUAGE WORK: Words and expressions for talking about free trade; Conditions<br>SKILLS: Negotiating</li><li><strong>19-20 уроки – ETHICS</strong> (Discuss questions of ethics at work)<br>LANGUAGE WORK: Words to describe illegal activity or unethical behaviour; Narrative tenses<br>SKILLS: Considering options</li><li><strong>21-22 уроки – LEADERSHIP</strong> (Discuss the qualities of good leadership)<br>LANGUAGE WORK: Words to describe; Relative clauses<br>SKILLS: Presenting</li><li><strong>23-24 уроки – COMPETITION</strong> (Do a quiz on how competitive you are)<br>LANGUAGE WORK: Idioms from sport to describe competition; Passives<br>SKILLS: Negotiating</li></ul>'
    },
    {
      id: 3,
      title: 'Ділова англійська мова',
      image: 'assets/images/corporate.png',
      shortDescription: 'Працюєте в міжнародному середовищі або плануєте кар\'єру у сфері бізнесу? Цей курс допоможе вам впевнено спілкуватися з колегами, клієнтами та партнерами.',
      longDescription: 'Курс з 24 урокiв та 12 тем. Кожна тема потребує ще й практичних випробувань, тому кожен другий урок буде присвячений вiдпрацюванню практичних навичок, а саме - business cases and role models. Так ви розвинете важливі навички ділового спілкування, такі як проведення презентацій, участь у зустрічах, ведення переговорів, телефонні дзвінки та використання англійської мови в соціальних ситуаціях.',
      details: [
        'Підходить для рівнів: від Pre-Intermediate до Upper-Intermediate',
        'Технiчний формат: онлайн (Zoom/Meet, Miro)',
        'Тривалість заняття: 90 хв',
        'Мова викладання: англійська + українська (за потреби)'
      ],
      courseDetails: 'Ділова англійська мова...'
    },
    {
      id: 4,
      title: 'Англійська для Meetings',
      image: 'assets/images/meeting.png',
      shortDescription: 'Потребуєте додаткової розмовної практики саме у форматі робочих мітингів? Цей курс допоможе вирішити ваші мовні задачі для ефективного проведення та участі в meetings.',
      longDescription: 'Успішна участь у meetings англійською мовою часто необхідна для просування по службі в компанії, особливо якщо це багатонаціональна компанія, а тому знання цієї мовної області є дуже важливим. Вам, і це - природньо, може бути набагато складніше брати участь у розмові, ніж просто розуміти її зміст, особливо якщо деякі учасники є носіями англійської мови а для тих, хто вагається, залишається дуже мало моментів мовчання, щоб висловитися. Тому мова meetings - вкрай важлива в діловому середовищі а курс "Англійська для meetings" - саме те що потрібно щоб проводити вдалі бізнес зустрічі.',
      courseDetails: '<ul><li><strong>1 урок - </strong> Meeting vocabular<br></li><li><strong>2 урок - </strong>Meetings | Starting, Concluding, Justifying, Recommending,Suggesting, Acknowledging what someone else says<br></li><li><strong>3 урок - </strong>Meetings | Giving your opinion, Giving someone else opinion, Agreeing/disagreeing, Persuading, passing information<br></li><li><strong>4 урок - </strong>Meetings interrupting, referring back, avoiding confrontation<br></li><li><strong>5 урок - </strong>Meetings| Updating and delegating tasks<br></li><li><strong>6 урок - </strong>Meetings | Presenting and discussing plans<br></li></ul>'
    }
  ]);

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  openCourseDetails(course: Course): void {
    this.selectedCourse.set(course);
  }

  closeCourseDetails(): void {
    this.selectedCourse.set(null);
  }
}