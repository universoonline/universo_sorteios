// Substitua pela sua URL e chave anônima do Supabase
const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDUyODczOCwiZXhwIjoyMDU2MTA0NzM4fQ.3MD4q-DssyXdBUOw1IcrU9FAQZCdpiEElCz55kfz0js"; // Pegue sua chave no Supabase

// Conectar ao Supabase
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Função para carregar participantes
async function carregarParticipantes() {
    const { data, error } = await supabase
        .from('universo_sorteio') // Nome da tabela no Supabase
        .select('*'); // Pega todos os dados da tabela

    if (error) {
        console.error("Erro ao carregar participantes:", error);
        return;
    }

    const lista = document.getElementById("lista-participantes");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar

    data.forEach(participante => {
        const item = document.createElement("li");

        // Verificar se existe número, caso contrário, exibe "Sem número ainda"
        const numero = participante.numero_so || "Sem número ainda";

        item.textContent = `${participante.nome} - ${numero}`;
        lista.appendChild(item);
    });
}

// Quando a página carregar, chama a função para buscar os participantes
document.addEventListener("DOMContentLoaded", carregarParticipantes);
