FROM mcr.microsoft.com/devcontainers/base:ubuntu

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

COPY --from=denoland/deno:bin /deno /usr/local/bin/deno

RUN curl -L https://fly.io/install.sh | FLYCTL_INSTALL=/usr/local sh

WORKDIR /workspace
