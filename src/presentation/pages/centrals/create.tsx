"use client";

import { Title } from "@components/core/title";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@utils/api";
import { useModels } from "@utils/queries/centrals";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as styles from "./styles/centrais-page.css";

const createCentralSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  mac: z
    .string()
    .regex(
      /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/,
      "MAC deve estar no formato XX:XX:XX:XX:XX:XX"
    ),
  modelId: z.string().min(1, "Selecione um modelo"),
});

type CreateCentralFormData = z.infer<typeof createCentralSchema>;

export const CreateCentralPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: models } = useModels();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCentralFormData>({
    resolver: zodResolver(createCentralSchema),
  });

  const createCentral = useMutation({
    mutationFn: (data: CreateCentralFormData) =>
      api.post("/centrals", {
        ...data,
        modelId: Number(data.modelId),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["centrals"] });
      router.push("/centrais");
    },
  });

  const onSubmit = (data: CreateCentralFormData) => {
    createCentral.mutate(data);
  };

  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Criar Central</Title.Text>
      </Title.Root>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Nome</label>
          <input
            id="name"
            type="text"
            className={styles.input}
            {...register("name")}
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mac" className={styles.label}>MAC</label>
          <input
            id="mac"
            type="text"
            placeholder="XX:XX:XX:XX:XX:XX"
            className={styles.input}
            {...register("mac")}
          />
          {errors.mac && (
            <span className={styles.errorMessage}>{errors.mac.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="modelId" className={styles.label}>Modelo</label>
          <select id="modelId" className={styles.select} {...register("modelId")}>
            <option value="">Selecione um modelo</option>
            {models?.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
          {errors.modelId && (
            <span className={styles.errorMessage}>{errors.modelId.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={createCentral.isPending}
        >
          {createCentral.isPending ? "Criando..." : "Criar Central"}
        </button>
      </form>
    </div>
  );
};
