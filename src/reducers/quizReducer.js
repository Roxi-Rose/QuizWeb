/**
 * Below is an example of a simple reducer, just added it to get the redux toolkit setup going
 * You'll need to make your own reducers, with actions as well to facilitate redux-toolkit
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quizData: [],
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizData(state, action) {
            state.quizData = action.payload;
        },
        updateTopic(state, action) {
            state.quizData = action.payload;
        },
        updateQuiz(state, action) {
            state.quizData = action.payload.updatedQuiz;
        },
        deleteQuiz(state, action) {
            const index = action.payload;
            state.quizData.splice(index, 1);
        },
    },
});

export const { setQuizData, updateTopic, updateQuiz, deleteQuiz } = quizSlice.actions;
export default quizSlice.reducer;