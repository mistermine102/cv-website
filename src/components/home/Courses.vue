<script setup>
import BaseTitle from "../base/BaseTitle.vue";
import CourseItem from "../CourseItem.vue";
</script>
<template>
  <section id="courses-section">
    <BaseTitle>KURSY</BaseTitle>
    <div class="grid 2xl:grid-cols-2 gap-8 justify-start 2xl:justify-center">
      <CourseItem
        title="The Web Developer Bootcamp"
        :image="{ src: '/images/courses/web-developer.jpg' }"
        :technologies="['Javascript', 'HTML', 'CSS']"
        author="Colt Steele"
        :hours="74"
        :links="{
          course: 'https://www.udemy.com/course/the-web-developer-bootcamp',
          author: 'https://www.udemy.com/user/coltsteele/',
        }"
      />
      <CourseItem
        title="Vue - The Complete Guide"
        :hours="31"
        :image="{ src: '/images/courses/vue.jpg' }"
        :technologies="['Vue', 'Firebase']"
        author="Maximilian Schwarzmüller"
        :links="{
          course: 'https://www.udemy.com/course/vuejs-2-the-complete-guide',
          author: 'https://www.udemy.com/user/maximilian-schwarzmuller/',
        }"
      />
      <CourseItem
        title="NodeJS - The Complete Guide"
        :image="{ src: '/images/courses/nodejs.jpg' }"
        :technologies="['NodeJS', 'Express', 'React']"
        author="Maximilian Schwarzmüller"
        :hours="40"
        :links="{
          course: 'https://www.udemy.com/course/nodejs-the-complete-guide',
          author: 'https://www.udemy.com/user/maximilian-schwarzmuller/',
        }"
      />
      <CourseItem
        title="The Complete React Native Course"
        :image="{ src: '/images/courses/react-native.jpg' }"
        :technologies="['React Native', 'React', 'NodeJS']"
        author="Stephen Grider"
        :hours="38"
        :links="{
          course:
            'https://www.udemy.com/course/the-complete-react-native-and-redux-course',
          author: 'https://www.udemy.com/user/sgslo/',
        }"
      />
    </div>
    <p class="mt-4">+ wiele poradników, minikursów oraz artykułów</p>
  </section>
</template>
