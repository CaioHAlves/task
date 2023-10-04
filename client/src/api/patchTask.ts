import baseApi from './baseApi'

export const patchTasks = (id: string, titulo: string, concluida: boolean) => baseApi({
  url: `/tasks/update/${id}`,
  method: "PATCH",
  data: {
    titulo,
    concluida
  }
})