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
      ]
    },
    {
      id: 2,
      title: 'Індивідуальні уроки Business English',
      image: 'assets/images/business.png',
      shortDescription: 'Хочете впевнено спілкуватися англійською на роботі, писати професійні листи чи брати участь у ділових зустрічах? Запрошую на індивідуальні заняття.',
      longDescription: 'Персональний навчальний план під ваші цілі (робота, кар’єра, співбесіда, бізнес-подорожі). Розвиток ключових навичок: презентації, переговори, дзвінки, наради, імейли, small talk. Заняття включають живі діалоги, рольові ігри, кейс-стаді та актуальну бізнес-лексику з використанням сучасних автентичних матеріалів. Гнучкий графік занять онлайн — навчайтеся з будь-якої точки світу.',
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
      ]
    },
    {
      id: 4,
      title: 'Англійська для Meetings',
      image: 'assets/images/meeting.png',
      shortDescription: 'Потребуєте додаткової розмовної практики саме у форматі робочих мітингів? Цей курс допоможе вирішити ваші мовні задачі для ефективного проведення та участі в meetings.',
      longDescription: 'Успішна участь у meetings англійською мовою часто необхідна для просування по службі в компанії, особливо якщо це багатонаціональна компанія, а тому знання цієї мовної області є дуже важливим. Вам, і це - природньо, може бути набагато складніше брати участь у розмові, ніж просто розуміти її зміст, особливо якщо деякі учасники є носіями англійської мови а для тих, хто вагається, залишається дуже мало моментів мовчання, щоб висловитися. Тому мова meetings - вкрай важлива в діловому середовищі а курс “Англійська для meetings” - саме те що потрібно щоб проводити вдалі бізнес зустрічі.',
    },
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