import React, { useState, useEffect } from 'react';
import CourseUnderReviewBanner from '../CourseUnderReviewBanner';
import CourseBanner from '../CourseBanner';
import Container from '../Container';
import Section from '../Section';
import * as S from './styles';

function TeacherDasboard() {
  const userData = {
    name: 'Lucas Sousa',
  };

  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    setCoursesData([
      {
        id: 1,
        name: 'CURSO 01',
        description: 'Descrição do curso',
        value: 0,
        subscribes_number: 152,
        create_date: '00/00/0000',
        status: 'active',
      },
      {
        id: 1,
        name: 'CURSO 02',
        description: 'Descrição do curso',
        value: 0,
        subscribes_number: 152,
        create_date: '00/00/0000',
        status: 'active',
      },
      {
        id: 1,
        name: 'CURSO 03',
        description: 'Descrição do curso',
        value: 0,
        subscribes_number: 152,
        create_date: '00/00/0000',
        status: 'inactive',
      },
      {
        id: 1,
        name: 'CURSO 04',
        description: 'Descrição do curso',
        value: 0,
        subscribes_number: 0,
        create_date: '00/00/0000',
        status: 'rejected',
      },
      {
        id: 1,
        name: 'CURSO 05',
        description: 'Descrição do curso',
        value: 0,
        subscribes_number: 0,
        create_date: '00/00/0000',
        status: 'in review',
      },
    ]);
  }, []);

  return (
    <>
      <Container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="90%"
        margin="50px 0 0 0"
      >
        <S.Text size="20px" weight="normal" color="primary">
          Bem vindo!
        </S.Text>
      </Container>
      <Section title="CURSOS EM ESPERA" contentDirection="column">
        {coursesData.map(course => {
          return course.status === 'in review' ||
            course.status === 'rejected' ? (
            <CourseUnderReviewBanner
              title={course.name}
              description={course.description}
              value={course.value}
              requestDate={course.create_date}
              inReview={course.status === 'in review'}
              rejected={course.status === 'rejected'}
            />
          ) : (
            <></>
          );
        })}
      </Section>
      <Section title="MEUS CURSOS" contentDirection="row" wrap="wrap">
        {coursesData.map(course => {
          return course.status === 'active' ? (
            <CourseBanner
              title={course.name}
              description={course.description}
              teacher={userData.name}
              value={course.value}
              subscribersNumber={course.subscribes_number}
            />
          ) : (
            <></>
          );
        })}
      </Section>
      <Section title="CURSOS INATIVOS" contentDirection="row" wrap="wrap">
        {coursesData.map(course => {
          return course.status === 'inactive' ? (
            <CourseBanner
              title={course.name}
              description={course.description}
              teacher={userData.name}
              value={course.value}
              subscribersNumber={course.subscribes_number}
              inactive
            />
          ) : (
            <></>
          );
        })}
      </Section>
    </>
  );
}

export default TeacherDasboard;
