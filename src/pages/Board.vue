<template>
  <v-table theme="dark">
    <thead>
      <tr>
        <th v-for="item in header" :key="item.text">
          {{ item.text }}
        </th>
        <th>Progress</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in tasks"
        :key="item.name"
        :class="{ 'bg-blue-200': item.inProgress }"
      >
        <td >{{ item.name }}</td>
        <td >{{ item.label }}</td>
        <td class="w-50 truncate">{{ item.description }}</td>
        <td >{{ item.category }}</td>
        <td >{{ item.failTime }}</td>
        <td>
          <button @click="markInProgress(item)">Mark as In Progress</button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import task from '../mock/Task';
import header from '../mock/Header';

export default {
  data() {
    return {
      header: header,
      tasks: task.map((t) => ({ ...t, inProgress: false })),
    };
  },
  methods: {
    markInProgress(task) {
      task.inProgress = !task.inProgress; 
    },
  },
};
</script>

<style>
.bg-blue-200 {
  background-color: #392da5; 
}
.truncate {
  max-width: 150px; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
}
</style>
