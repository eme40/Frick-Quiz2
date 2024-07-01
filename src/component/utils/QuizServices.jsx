import axios from  "axios"

export const api = axios.create({
    baseURL: "http://localhost8080/api/quizzes"
})

export const createQuestion = async(quizQuestion)=>{
    try {
        const response = await api.post("/create-new-question",quizQuestion)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getAllQuestions = async()=>{
    try {
        const response = await api.get("/all-questions")
        return response.data
    } catch (error) {
        console.error(error)
        return []
    }
}

export const fetchQuizForUser = async(numberOfQuestions,subject)=>{
    try {
        const response = await api.get(`/fetch-questions-for-user?numberOfQuestions=${numberOfQuestions}&subject=${subject}`)
        return response.data
    } catch (error) {
      console.error(error)  
      return []
    }
}

export const getSubjects = async()=>{
    try {
        const response = await api.get("/subject")
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const updateQuestion = async(id,question)=>{
    try {
        const response = await api.put(`/question/${id}/update`,question)
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const getQuestionById = async(id)=>{
    try {
        const response = await api.get(`/question/${id}`)
        return response.data;
    } catch (error) {
       console.error(error) 
    }
}

export const deleteById = async(id)=>{
    try {
        const response = await api.delete(`question/${id}/delete`)
        return response.data
    } catch (error) {
       console.error(error) 
    }
}