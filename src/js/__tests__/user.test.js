import {getUser} from "../user";

test.each([
    [{
        name: 'Маг',
        health: 80,
    }, 'healthy'],
    [{
        name: 'Кит',
        health: 48
    }, 'wounded'],
    [{
        name: 'Джо',
        health: 12
    }, 'critical']
])(
    ('health level'),
    (user, expected) => {
        const levelHealth = getUser(user);
        expect(levelHealth).toBe(expected)
    }
)
