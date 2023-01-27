const SUPABASE_URL = 'https://ymvfilcivutxojmjfios.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdmZpbGNpdnV0eG9qbWpmaW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ1MTg5OTEsImV4cCI6MTk5MDA5NDk5MX0.Rf8GvkCe-vF7Fxy6rR0pVu_QXX67mnTu95dC8XW5sdY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signIn(email, password) {
    const { data, error } = await client.auth.signIn({
        email: email,
        password: password
    });
}

export async function signUp(email, password) {
    const { data, error } = await client.auth.signUp({
        email: email,
        password: password
    });
}

export async function getPosts() {
    const { data, error } = await client
        .from('posts')
        .select('*');
    return data;
}