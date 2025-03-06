const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co"; // Substitua pela sua URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mjg3MzgsImV4cCI6MjA1NjEwNDczOH0.sbmYJqCzMOd9A9nUFuw-Og8e156YGEwcME5dLeV6aLY"; // Substitua pela sua chave

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita o envio do formulário

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const data_cadastro = new Date().toISOString(); // Pega a data e hora atual para o cadastro

  // Envia os dados para o Supabase
  supabase
    .from('universo_sorteio') // Nome da sua tabela no Supabase
    .insert([
      { nome: nome, email: email, whatsapp: whatsapp, data_cadastro: data_cadastro }
    ])
    .then(({ data, error }) => {
      if (error) {
        console.error('Erro ao inserir dados:', error);
      } else {
        alert('Cadastro realizado com sucesso!');
      }
    });
});
   
