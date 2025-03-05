// Substitua pela sua URL e chave anônima do Supabase
const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDUyODczOCwiZXhwIjoyMDU2MTA0NzM4fQ.3MD4q-DssyXdBUOw1IcrU9FAQZCdpiEElCz55kfz0js"; // Coloque sua chave aqui

// Conectar ao Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para cadastrar os participantes
async function cadastrarParticipante(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;

    // Envia os dados para a tabela 'universo_sorteio' no Supabase
    const { data, error } = await supabase
        .from('universo_sorteio') // Nome da tabela no Supabase
        .insert([
            { email: email, whatsapp: whatsapp }
        ]);

    if (error) {
        console.error('Erro ao cadastrar participante:', error);
        alert('Erro ao cadastrar, tente novamente.');
    } else {
        alert(`Cadastro realizado! \nE-mail: ${email} \nWhatsApp: ${whatsapp}`);
    }
}

// Adiciona o ouvinte de evento para o envio do formulário
document.getElementById('cadastroForm').addEventListener('submit', cadastrarParticipante);
