const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDUyODczOCwiZXhwIjoyMDU2MTA0NzM4fQ.3MD4q-DssyXdBUOw1IcrU9FAQZCdpiEElCz55kfz0js"; // Substitua pela sua chave correta

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function cadastrarUsuario() {
    // Coleta os valores do formulário
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const data_cadastro = new Date().toISOString(); // Data atual em formato ISO

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !whatsapp) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        // Envia os dados para o Supabase
        const { data, error } = await supabase
            .from('universo_sorteio') // Nome da tabela no Supabase
            .insert([{ nome, email, whatsapp, data_cadastro }]);

        if (error) {
            console.error("Erro ao cadastrar:", error.message);
            alert("Erro ao cadastrar! Verifique o console.");
        } else {
            alert("Cadastro realizado com sucesso!");
            document.getElementById("cadastroForm").reset(); // Limpa os campos após cadastro
        }
    } catch (err) {
        console.error("Erro inesperado:", err);
        alert("Ocorreu um erro. Tente novamente.");
    }
}

// Adiciona evento ao formulário para capturar o envio
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
        e.preventDefault(); // Evita o reload da página
        await cadastrarUsuario();
    });
});
window.cadastrarUsuario = cadastrarUsuario;
