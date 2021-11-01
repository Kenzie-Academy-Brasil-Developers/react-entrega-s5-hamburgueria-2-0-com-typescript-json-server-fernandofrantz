Link da API: https://react-entrega-s5-hamburgueria-2-0-com-typescript-fernandofrantz.vercel.app

Funcionalidades da API:

Register: post/users
Endpoint utilizado para fazer o cadastro de usuários, recebe os dados de  usuáriio como parâmetro no padrão:
{
	"username": "joje7",
	"email": "joj9@joje.com",
	"password": "123456789",
	"age": "19"
}

Login: post/login
Endpoint utilizado para fazer login, recebe como parâmetro email e senha:
{
	"email": "joj9@joje.com",
	"password": "123456789",
}

Menu: get/menu
Endpoint utilizado para pegar o cardápio.

Usuários: get/users
Endpoint utilizado para ter acesso a todos usuários da aplicação, necessário passar o token de autenticação.

Delete users: delete/users/userId
Deletar usuário específico, necessita ter token de autenticação e apenas o próprio usuário pode se deletar.

