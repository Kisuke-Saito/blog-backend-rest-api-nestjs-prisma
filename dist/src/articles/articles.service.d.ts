import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findDrafts(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }[]>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        author: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            email: string;
            password: string;
        };
    } & {
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<{
        id: number;
        title: string;
        description: string | null;
        body: string;
        published: boolean;
        createdAt: Date;
        updatedAt: Date;
        authorId: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
