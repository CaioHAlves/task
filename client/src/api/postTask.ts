import baseApi from './baseApi'

export const postTasks = (titulo: string) => baseApi({
  url: `/tasks/create`,
  method: "POST",
  data: {
    titulo
  }
})