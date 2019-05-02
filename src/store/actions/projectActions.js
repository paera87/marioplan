export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'pelle',
            authorLastName: 'xxx',
            createdAt: new Date()
        }).then((result) => {
            //project.id = result.id
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};

