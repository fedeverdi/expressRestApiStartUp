export class findClass {
    public select;
    public where;

    getObject() {
        return {
            select: this.select,
            where: this.where
        }
    }
}