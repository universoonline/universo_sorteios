const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDUyODczOCwiZXhwIjoyMDU2MTA0NzM4fQ.3MD4q-DssyXdBUOw1IcrU9FAQZCdpiEElCz55kfz0js";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById("cadastroForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Obtendo valores do formulário
    const nome = document.getElementById("nome")?.value;
    const email = document.getElementById("email")?.value;
    const whatsapp = document.getElementById("whatsapp")?.value;
    const data_cadastro = new Date().toISOString();

    // Verificação se os campos estão preenchidos
    if (!nome || !email || !whatsapp) {
        alert("Preencha todos os campos!");
        return;
    }

    try {
        // Enviando os dados para o Supabase
        const { data, error } = await supabase
            .from("universo_sorteio") // Nome da tabela
            .insert([{ nome, email, whatsapp, data_cadastro }]);

        if (error) {
            console.error("Erro ao inserir dados:", error);
            alert("Erro ao cadastrar! Verifique o console.");
        } else {
            alert("Cadastro realizado com sucesso!");
        }
    } catch (err) {
        console.error("Erro inesperado:", err);
        alert("Ocorreu um erro. Tente novamente.");
    }
});
