import styles from './siklls.module.scss';

const skills = [
  {
    id: 1,
    number: '01',
    title: 'Front-End Development',
    text: 'I can build modern and responsive websites using HTML, CSS, JavaScript, and React.',
  },
  {
    id: 2,
    number: '02',
    title: 'React Development',
    text: 'I can create reusable components, work with React Router, Hooks, and dynamic content.',
  },
  {
    id: 3,
    number: '03',
    title: 'UI & Responsive Design',
    text: 'I focus on clean interfaces, responsive layouts, animations, and user-friendly experiences.',
  },
  {
    id: 4,
    number: '04',
    title: 'JavaScript',
    text: 'I understand JavaScript fundamentals and can work with functions, arrays, objects, DOM, and APIs.',
  },
  {
    id: 5,
    number: '05',
    title: 'SCSS & CSS',
    text: 'I can create organized styles using SCSS, Flexbox, Grid, animations, and transitions.',
  },
  {
    id: 6,
    number: '06',
    title: 'API Integration',
    text: 'I can connect websites to APIs and display dynamic data using JavaScript and React.',
  },
];

function Siklls() {
  return (
    <section className={styles.skills}>
      <div className="container">
        <div className={styles.skills__main}>

          <span className={styles.skills__title}>
            My Skills
          </span>

          <div className={styles.skills__cards}>
            {skills.map((skill) => (
              <div className={styles.skills__card} key={skill.id}>

                <span className={styles.skills__number}>
                  {skill.number}
                </span>

                <h3 className={styles.skills__cardTitle}>
                  {skill.title}
                </h3>

                <p className={styles.skills__text}>
                  {skill.text}
                </p>

                <span className={styles.skills__arrow}>
                  →
                </span>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Siklls;