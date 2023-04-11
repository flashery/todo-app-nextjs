import { gql } from "@apollo/client";

export const ADD_TASK_MUTATION = gql`

    mutation AddTask($task: String!) {

        addTask(task: $task) {

            id
            task
            completed

        }

    }
`;

export const TOGGLE_TASK_MUTATION = gql`

    mutation AddTask($id: ID!, $completed:  Boolean!) {

        toggleTask(id: $id, completed:  $completed) {

            id
            task
            completed

        }

    }

`;

export const DELETE_TASK_MUTATION = gql`

    mutation DeleteTask($id: ID!) {

        deleteTask(id: $id) {

            id
            completed
            task

        }

    }
`;


