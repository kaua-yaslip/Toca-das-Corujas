import z from "zod";

export const FormDataSchema = z.object({
  nome: z.string().min(1, "O nome é obrigatório."),
  email: z.string().email("Email inválido."),
  empresa: z.string().min(1, "A empresa é obrigatória."),
  telefone: z.string().min(1, "O telefone é obrigatório."),
  como_nos_conheceu: z.string().min(1, "Este campo é obrigatório."),
  mensagem: z.string().min(1, "A mensagem é obrigatória."),
});