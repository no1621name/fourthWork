import Alpine from 'alpinejs';
//alpine plugin
import mask from '@alpinejs/mask';

//global data
import aboutOperation from './globalData/aboutOperation.js';
import clinic from './globalData/clinic.js';

export default () => {
  Alpine.plugin(mask);

  Alpine.data('header', () => ({
    isShowNavbar: window.outerWidth <= 1023,
    toggleNavbar() { this.isShowNavbar = !this.isShowNavbar },
    links: [
      {
        text: 'СТОИМОСТЬ',
        href: '#price'
      },
      {
        text: 'ПОДРОБНО ОБ ОПЕРАЦИИ',
        href: '#aboutOperation'
      },
      {
        text: 'О ДОКТОРЕ',
        href: '#aboutHaritonow'
      },
      {
        text: 'ИСТОРИИ ПАЦИЕНТОВ',
        href: '#cases'
      },
      {
        text: 'КЛИНИКА',
        href: '#clinic'
      },
      {
        text: 'ОТВЕТЫ НА ВОПРОСЫ',
        href: '#FAQ'
      },
      {
        text: 'ДИПЛОМЫ',
        href: '#certificates'
      },
      {
        text: 'КОНТАКТЫ',
        href: '#contacts'
      },
    ]
  }));

  Alpine.data('consultation', () => ({
    consultationServices: [
      '<b>Укоротить, приподнять</b> или опустить нос',
      '<b>Расширить или сузить</b> кончик носа',
      '<b>Восстановить после травмы</b> или убрать горбинку',
      '<b>Начать</b> нормально дышать',
    ]
  }));

  Alpine.data('beforeAfterSlider', () => ({
    slides: [
      {
        beforeImg: '../img/pseudoslides/pseudoslide1.jpg',
        afterImg: '../img/pseudoslides/pseudoslide2.jpg'
      },
      {
        beforeImg: '../img/pseudoslides/pseudoslide3.jpg',
        afterImg: '../img/pseudoslides/pseudoslide4.jpg'
      },
      {
        beforeImg: '../img/pseudoslides/pseudoslide1.jpg',
        afterImg: '../img/pseudoslides/pseudoslide2.jpg'
      },
      {
        beforeImg: '../img/pseudoslides/pseudoslide3.jpg',
        afterImg: '../img/pseudoslides/pseudoslide4.jpg'
      },
      {
        beforeImg: '../img/pseudoslides/pseudoslide1.jpg',
        afterImg: '../img/pseudoslides/pseudoslide2.jpg'
      },
      {
        beforeImg: '../img/pseudoslides/pseudoslide3.jpg',
        afterImg: '../img/pseudoslides/pseudoslide4.jpg'
      },
    ],
  }));

  Alpine.data('discounts', () => ({
    discountsList: [
      {
        newPrice: '110 000 ₽',
        oldPrice: '170 000 ₽',
        description: 'ринопластика «только кончик»',
        linkHref: '/',
        backgroundImg: '../img/discounts/service-1.png',
      },
      {
        newPrice: '230 000 ₽',
        oldPrice: '420 000 ₽',
        description: 'ринопластика + нижняя транс-конъюктивальная блефаропластика',
        linkHref: '/',
        backgroundImg: '../img/discounts/service-3.png',
      },
      {
        newPrice: '200 000 ₽',
        oldPrice: '290 000 ₽',
        description: 'ринопластика + верхняя блефаропластика',
        linkHref: '/',
        backgroundImg: '../img/discounts/service-2.png',
      },

    ]
  }));

  Alpine.data('specializations', () => ({
    specializationsList: [
      {
        title: 'Коррекция кончика носа',
        description: 'Восстановление гармоничных очертаний носа, не затрагивая опорные структуры',
      },
      {
        title: 'Пластика крыльев носа',
        description: 'Позволяет изменить ширину, толщину, симметричность ноздрей',
      },
      {
        title: 'Рино- <br/> пластика',
        description: 'Комплексная коррекция носовых структур, не затрагивающая перегородку',
      },
      {
        title: 'Рино- <br/> септопластика',
        description: 'Выравнивание носовой перегородки с последующим исправлением формы носа',
      },
      {
        title: 'Посттравмати- <br/> ческая пластика',
        description: 'Устранение деформаций после травм',
      },
      {
        title: 'Вторичная ринопластика',
        description: 'Коррекция результатов после ранее проведенной ринопластики',
      },
    ]
  }));

  Alpine.data('aboutOperation', aboutOperation);

  Alpine.data('registration', () => ({
    onConsultationsList: [
      '<b>Выслушаем и вникнем</b> в суть вашей ситуации',
      '<b>Бесплатно</b> сделаем фотомоделирование',
      '<b>Сориентируем</b> по стоимости и рассрочки',
      '<b>Объясним</b> как будет проходить операция',
      '<b>Расскажем</b> о реабилитации после операции',
    ],
    consultationsList: [
      'Some1',
      'Some2',
      'Some3',
      'Some4',
      'Some5',
    ],
  }));

  Alpine.data('cases', () => ({
    casesList: [
      {
        img: './img/cases/case1.png',
        imgAlt: 'case1',
        text: 'После ринопластики вышла замуж',
      },
      {
        img: './img/cases/case2.png',
        imgAlt: 'case2',
        text: 'Даже не помню, что делала рино',
      },
      {
        img: './img/cases/case3.png',
        imgAlt: 'case3',
        text: 'Теперь дышу нормально ',
      },
      {
        img: './img/cases/case4.png',
        imgAlt: 'case4',
        text: 'Через неделю уже гуляла',
      },
      {
        img: './img/cases/case1.png',
        imgAlt: 'case1',
        text: 'После ринопластики вышла замуж',
      },
      {
        img: './img/cases/case2.png',
        imgAlt: 'case2',
        text: 'Даже не помню, что делала рино',
      },
      {
        img: './img/cases/case3.png',
        imgAlt: 'case3',
        text: 'Теперь дышу нормально ',
      },
      {
        img: './img/cases/case4.png',
        imgAlt: 'case4',
        text: 'Через неделю уже гуляла',
      },
      {
        img: './img/cases/case1.png',
        imgAlt: 'case1',
        text: 'После ринопластики вышла замуж',
      },
      {
        img: './img/cases/case2.png',
        imgAlt: 'case2',
        text: 'Даже не помню, что делала рино',
      },
      {
        img: './img/cases/case3.png',
        imgAlt: 'case3',
        text: 'Теперь дышу нормально ',
      },
      {
        img: './img/cases/case4.png',
        imgAlt: 'case4',
        text: 'Через неделю уже гуляла',
      },
    ]
  }));

  Alpine.data('certificates', () => ({
    certificatesList: [
      {
        img: './img/certificates/certificate1.png',
        imgAlt: 'certificate1'
      },
      {
        img: './img/certificates/certificate2.png',
        imgAlt: 'certificate2'
      },
      {
        img: './img/certificates/certificate3.png',
        imgAlt: 'certificate3'
      },
      {
        img: './img/certificates/certificate1.png',
        imgAlt: 'certificate1'
      },
      {
        img: './img/certificates/certificate2.png',
        imgAlt: 'certificate2'
      },
      {
        img: './img/certificates/certificate3.png',
        imgAlt: 'certificate3'
      },
      {
        img: './img/certificates/certificate1.png',
        imgAlt: 'certificate1'
      },
      {
        img: './img/certificates/certificate2.png',
        imgAlt: 'certificate2'
      },
      {
        img: './img/certificates/certificate3.png',
        imgAlt: 'certificate3'
      },
    ]
  }));

  Alpine.data('clinic', clinic);

  Alpine.data('FAQ', () => ({
    FAQList: [
      [
        {
          questionText: 'С какого возраста можно делать ринопластику?',
          answer: 'Оптимальный возраст для проведения ринопластики - после 18 лет. К этому времени хрящи и кости носа завершают свой рост, поэтому хирург может спокойно работать с тканями, не боясь, что они сместятся после операции. В более молодом возрасте коррекцию делают только по неотложным медицинским показаниям (например, при серьезных нарушениях дыхания или после травмы).',
          active: false,
        },
        {
          questionText: 'Какие анализы нужно сдавать перед операцией?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'Насколько больно будет после операции?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'После операции останутся шрамы?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'Как долго будут держаться синяки?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
      ],
      [
        {
          questionText: 'Через сколько можно выходить на работу?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'Когда можно начать заниматься спортом?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'Дается ли больничный?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'А что если я случайно повернуть на бок во сне? Нос будет испорчен?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
        {
          questionText: 'Можно ли вернуть налоговый вычет за операцию?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at ornare tellus. Morbi ultricies ligula non risus imperdiet aliquet. Curabitur posuere sodales dui, quis faucibus dui scelerisque nec. Integer dignissim velit dignissim convallis iaculis. Integer at metus porttitor, bibendum urna quis, placerat quam. ',
          active: false,
        },
      ],
    ]
  }));

  Alpine.data('contacts', () => ({
    clinicImagesList: [
      {
        src: './img/clinic/clinic1.png',
        alt: 'clinic1',
      },
      {
        src: './img/clinic/clinic3.png',
        alt: 'clinic3',
      },
      {
        src: './img/clinic/clinic4.png',
        alt: 'clinic4',
      },
      {
        src: './img/clinic/clinic6.png',
        alt: 'clinic6',
      },
    ],
  }));

  Alpine.start();
};