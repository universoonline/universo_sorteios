// Importando a função createClient do Supabase
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

// Configuração do Supabase
const SUPABASE_URL = "https://runpfgacmjemflyecubp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1bnBmZ2FjbWplbWZseWVjdWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Mjg3MzgsImV4cCI6MjA1NjEwNDczOH0.sbmYJqCzMOd9A9nUFuw-Og8e156YGEwcME5dLeV6aLY"; // Substitua pela chave correta

// Criando o cliente do Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Testando conexão com Supabase
console.log("Supabase carregado:", supabase);

// Função para cadastrar usuário
async function cadastrarUsuario() {
    try {
        // Pegando os valores dos inputs
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const whatsapp = document.getElementById("whatsapp").value.trim();
        const data_cadastro = new Date().toISOString();

        // Verificando se os campos foram preenchidos
        if (!nome || !email || !whatsapp) {
            alert("Preencha todos os campos!");
            return;
        }

        // Enviando os dados para o Supabase
        const { data, error } = await supabase
            .from("universo_sorteio") // Nome da tabela no Supabase
            .insert([{ nome, email, whatsapp, data_cadastro }]);

        if (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar! Verifique o console.");
        } else {
            alert("Cadastro realizado com sucesso!");
            document.getElementById("cadastroForm").reset(); // Limpa os campos
        }
    } catch (err) {
        console.error("Erro inesperado:", err);
        alert("Ocorreu um erro. Tente novamente.");
    }
}

// Garantindo que a função será reconhecida no console
document.addEventListener("DOMContentLoaded", function () {
    window.cadastrarUsuario = cadastrarUsuario;
});
