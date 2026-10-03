describe('EngageSphere API - GET /customers', () => {
  it('Retorna a lista de clientes com sucesso', () => {
    cy.request('GET', 'http://localhost:3001/customers').then(({ status, body }) => {
      expect(status).to.eq(200)
      expect(body.customers).to.be.an('array')
      expect(body.customers.length).to.be.at.most(10)
      expect(body.pageInfo.currentPage).to.eq(1)
    })
  })

  it('Retorna erro 400 quando a página é zero', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3001/customers?page=0',
      failOnStatusCode: false
    }).then(({ status, body }) => {
      expect(status).to.eq(400)
      expect(body).to.have.property('error')
    })
  })
})
