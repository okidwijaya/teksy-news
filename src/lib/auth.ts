import { supabase } from '@/lib/supabase';

export async function signUp(email: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) throw error;

    const user = data.user;
    if (!user) throw new Error('User not found after signup');

    const { error: profileError } = await supabase.from('user_profiles').insert([
        {
            id: user.id,
            full_name: fullName,
            role: 'viewer',
        },
    ]);
    if (profileError) throw profileError;

    return data;
}

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error;

    return data;
}

export async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
}
