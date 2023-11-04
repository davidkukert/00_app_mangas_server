-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('MANGA', 'MANHWA', 'MANHUA');

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleAlters" TEXT[],
    "description" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL DEFAULT 'MANGA',
    "adult" BOOLEAN NOT NULL,
    "authors" TEXT[],
    "cover" TEXT,
    "views" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chapters" (
    "id" TEXT NOT NULL,
    "number" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,
    "images" TEXT[],
    "projectId" TEXT NOT NULL,

    CONSTRAINT "chapters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_tags_projects" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "chapters_number_projectId_key" ON "chapters"("number", "projectId");

-- CreateIndex
CREATE UNIQUE INDEX "_tags_projects_AB_unique" ON "_tags_projects"("A", "B");

-- CreateIndex
CREATE INDEX "_tags_projects_B_index" ON "_tags_projects"("B");

-- AddForeignKey
ALTER TABLE "chapters" ADD CONSTRAINT "chapters_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tags_projects" ADD CONSTRAINT "_tags_projects_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tags_projects" ADD CONSTRAINT "_tags_projects_B_fkey" FOREIGN KEY ("B") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
