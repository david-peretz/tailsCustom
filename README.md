1. הקוד רספונסיבי CUSTOM 

2. יש לשים לב 
שהקוד עובד עם 
ObservableStore 

כלומר שאם נריץ אותו  
כמו אפליקצייה 
localhost:4200
נראה שאחרי פעם אחת שנטען , אפשר לעבוד בלי אינטרנט



3. עיקר הקוד ב   EntitiesComponent
שבו יש האזנה לניווט 

4. יש לשים לב שהדאטה מסתכרן בין ה 
USERSTORESERVICE
שמתעדכן באמצעות  
 await this.usersService.fetch();

5.הקוד עובד עם 
async
await 

 async ngOnInit() {
    await this.usersService.fetch();

    this.users = this.usersService.users;

    //lisening route and get id ,get it , and  location back(), if we want to add entety detail, cancel the back
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: string = params.get("id");
