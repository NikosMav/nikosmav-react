import React from 'react';
import styles from '../assets/css/SkillMatrix.module.css';

const SkillMatrix = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C/C++", level: 5 },
        { name: "Python", level: 4 },
        { name: "Java", level: 4 },
        { name: "Bash", level: 4 },
        { name: "JavaScript", level: 3 },
        { name: "HTML/CSS", level: 3 }
      ]
    },
    {
      title: "Frameworks/Tools",
      skills: [
        { name: "Spring Framework", level: 4 },
        { name: "Spring Boot", level: 4 },
        { name: "React", level: 4 },
        { name: "Jenkins", level: 3 },
        { name: "Docker", level: 3 },
        { name: "GitLab CI", level: 4 },
        { name: "Node.js", level: 3 },
        { name: "Git", level: 5 }
      ]
    },
    {
      title: "Networking/Security",
      skills: [
        { name: "Network Protocols", level: 4 },
        { name: "Wireshark", level: 4 },
        { name: "TCP/IP", level: 4 },
        { name: "Network Security", level: 3 }
      ]
    }
  ];

  return (
    <section className={styles.skillMatrix}>
      <h4 className={styles.skillMatrixTitle}>Skill Matrix</h4>
      <div className={styles.skillCategories}>
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.skillCategory}>
            <h4 className={styles.skillCategoryTitle}>{category.title}</h4>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel} aria-hidden="true">
                      {skill.level}/5
                    </span>
                  </div>
                  <div 
                    className={styles.skillBarContainer}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="5"
                    aria-label={`${skill.name} proficiency level ${skill.level} out of 5`}
                  >
                    <div 
                      className={styles.skillBar}
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillMatrix; 