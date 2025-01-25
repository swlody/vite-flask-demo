create table
cities (
    id uuid not null primary key,
    name text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
)