CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert mock data into Appointments table
INSERT INTO "Appointments" (id, "date", "time", "doctorName", "location", specialty, "organizationId", "createdAt", "updatedAt")
VALUES 
  ('d5477d62-3210-4f19-b717-1d6e50e88cd2', '2023-11-05', '10:00:00', 'Petch Jirapinyo', 'Clinic A', 'Cardiology', 'fda4ed70-428f-4b38-9e93-d4c1360a6d1d', now(), now()),
  ('f6de3cf6-5ce7-4bf1-a1c2-46e69325aa9d', '2023-11-06', '11:30:00', 'Chuck DiNolfo', 'Hospital B', 'Orthopedics', '238c1539-5e8f-4a0d-82b3-911f96a68aef', now(), now()),
  ('a23473fc-dde3-4ff1-8cfd-6a6a3521a084', '2023-11-07', '09:15:00', 'Ping Tuksaorn', 'Clinic C', 'Dermatology', '56d7b11e-3f56-495a-b37b-e1f7638fcdd2', now(), now()),
  ('4580b015-1bc7-490b-8c3e-1d3fc5a383ff', '2023-11-08', '14:45:00', 'Jay Tanyatorn', 'Hospital D', 'Neurology', 'a5e883c5-29eb-4b5c-9877-225156496fc6', now(), now()),
  ('b27e509f-3df7-4e04-9355-b0cc3ef5044e', '2023-11-09', '13:00:00', 'Yok Kanya', 'Clinic E', 'Oncology', 'd8b3a061-408d-4d6d-9079-6f923e0a1b2d', now(), now()),
  ('7d9e822c-31f5-47da-9fb6-80d1c8b9d47c', '2023-11-10', '16:30:00', 'Three Thanwarin', 'Hospital F', 'Pediatrics', '1096c2b8-e196-4299-89e5-cab15bc78ed7', now(), now()),
  ('c080d138-6991-4072-9db5-ea7dfe2f0f17', '2023-11-11', '10:45:00', 'Chelsea D’Ascanio', 'Clinic G', 'Gynecology', '7f9806ae-85d9-4809-8c95-13f8bf384f9d', now(), now()),
  ('04f8c1e5-c18b-4d24-9f3b-946ab128a73f', '2023-11-12', '12:15:00', 'Sheri Zarella', 'Hospital H', 'Urology', 'debd41d8-3ca6-4d16-bc19-98f7b4efc31e', now(), now()),
  ('cfc0be64-7d7a-4d53-b128-cbbab9a46f56', '2023-11-13', '08:30:00', 'Carmen McWilliams', 'Clinic I', 'ENT', 'c0207e18-2ea2-40d0-becb-602166775b20', now(), now()),
  ('c9bc78a1-1ecb-4a6f-a6e2-c48c696df678', '2023-11-14', '15:00:00', 'Lauren Kort', 'Hospital J', 'Cardiology', '05563b33-2ae7-4c5d-8c1b-145ea20d9b49', now(), now()),
  ('c1f44a71-10d9-44a0-9b8a-bb973cf836f0', '2023-11-15', '11:00:00', 'Zlatan (Z) Harambasic', 'Clinic K', 'Orthopedics', 'bb2fc415-61c1-4ec7-a3c8-035197df746c', now(), now()),
  ('d9c41ee6-ded0-4a5b-b360-8b09d78cd7d2', '2023-11-16', '14:30:00', 'Janelle Esker', 'Hospital L', 'Dermatology', '3f4a52e2-0769-4bf1-9ef9-7e8d3a987135', now(), now()),
  ('2637ee54-864e-4c62-9495-8da202ed7c06', '2023-11-17', '09:45:00', 'Grayce O’Neill', 'Clinic M', 'Neurology', 'ec1cd135-8523-4c41-b1a0-85667abfc052', now(), now()),
  ('ee5ce08b-3df6-4ae9-9cfb-50b6f6e8b380', '2023-11-18', '13:30:00', 'Shivani Mehta', 'Hospital N', 'Oncology', 'b4d3a057-55b8-4a69-b7fc-0586d6a00fb0', now(), now()),
  ('1a9512c2-2a7b-42e1-ba5b-62b56a581015', '2023-11-19', '16:15:00', 'Christopher C. Thompson', 'Clinic O', 'Pediatrics', '09b62e9f-b9a6-4e66-a8ec-155f04586552', now(), now()),
  ('5b51e174-70db-40b3-8f52-84ae18d32750', '2023-11-20', '10:30:00', 'Pichamol Jirapinyo', 'Hospital P', 'Gynecology', '536f3ae5-2e50-4a9f-9b5c-03f3f4edec0b', now(), now());


INSERT INTO "Users"
(id, email, "password", "role", "createdAt", "updatedAt")
VALUES('71197a68-8c54-4c25-ac57-baa1e64e95e0'::uuid, 'example@email.com', '$2b$10$AXjSMDbWz6n7RQRFjoGqeu/fa0b9K2KTV/nIrUQ75RyLSkPp22KJu', 'admin'::public."enum_Users_role", '2023-11-03 17:57:03.568', '2023-11-03 17:57:03.568');

INSERT INTO "Appointments"
(id, "userId", "date", "time", "doctorName", "location", specialty, "createdAt", "updatedAt")
VALUES('1a1f934a-15f0-4a43-afb1-45a05a9c92a3'::uuid, '71197a68-8c54-4c25-ac57-baa1e64e95e0'::uuid, '2023-11-05', '10:00:00', 'Dr. Smith', 'Hospital A', 'Cardiology', '2023-11-03 18:06:33.955', '2023-11-03 18:06:33.955');
INSERT INTO "Appointments"
(id, "userId", "date", "time", "doctorName", "location", specialty, "createdAt", "updatedAt")
VALUES('9bfb3cf0-1706-4ae0-825e-9737d0276f1d'::uuid, '71197a68-8c54-4c25-ac57-baa1e64e95e0'::uuid, '2023-11-06', '11:30:00', 'Dr. Johnson', 'Clinic B', 'Pediatrics', '2023-11-03 18:06:33.955', '2023-11-03 18:06:33.955');
INSERT INTO "Appointments"
(id, "userId", "date", "time", "doctorName", "location", specialty, "createdAt", "updatedAt")
VALUES('777dc31e-157d-4f02-b82e-20c0bb3502c8'::uuid, '71197a68-8c54-4c25-ac57-baa1e64e95e0'::uuid, '2023-11-08', '15:00:00', 'Dr. Davis', 'Medical Center C', 'Orthopedics', '2023-11-03 18:06:33.955', '2023-11-03 18:06:33.955');