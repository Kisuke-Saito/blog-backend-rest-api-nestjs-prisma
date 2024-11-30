import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(createArticleDto: CreateArticleDto): Promise<ArticleEntity>;
    findAll(): Promise<ArticleEntity[]>;
    findDrafts(): Promise<ArticleEntity[]>;
    findOne(id: number): Promise<ArticleEntity>;
    update(id: number, updateArticleDto: UpdateArticleDto): Promise<ArticleEntity>;
    remove(id: number): Promise<ArticleEntity>;
}
