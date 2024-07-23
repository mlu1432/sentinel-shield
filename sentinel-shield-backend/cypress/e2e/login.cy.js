describe('Authentication API', () => {
    it('should allow a user to log in successfully', () => {
        cy.request('POST', 'http://localhost:3000/api/login', {
            email: 'lenkosi07@gmail.com',
            password: 'password123'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Login successful');
            expect(response.body).to.have.property('user');
        });
    });

    it('should display an error for invalid login credentials', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/api/login',
            body: {
                email: 'invaliduser@example.com',
                password: 'wrongpassword'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('message', 'Invalid credentials');
        });
    });
});