const initialState = {
    data: [
        {
            id: '1',
            name: 'Basharat Bhai',
            phone: '03019988437',
            email: 'basha@gmail.com',
            categories: 'work, family'
        },
        {
            id: '2',
            name: 'Gulraiz Uncle',
            phone: '03009812298',
            email: 'gul.raiz@gmail.com',
            categories: 'family'
        },
        {
            id: '3',
            name: 'Haji KaramDaad',
            phone: '03332019595',
            email: 'karam333@gmail.com',
            categories: 'family, friends'
        }
    ]
};

export default (state = initialState, action = {}) => {
    switch (action.type) {

        case 'ADD_CONTACT':
            return {
                ...state,
                    data: state.data.concat({
                        id: Date.now().toString(32),
                        name: action.contactName,
                        phone: action.contactPhone,
                        email: action.contactEmail,
                        categories: action.contactCategory
                    })
            };

        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(contact => contact.id !== action.removedContactId)
            };

        case 'UPDATE_CONTACT':
            return {
                ...state,
                data: state.data.map(
                    contact =>
                        contact.id !== action.updatedContactId
                            ? contact
                            : {
                                ...contact,
                                ...action.updatedContact
                            }
                )
            };

        default:
            return state
    }
};
