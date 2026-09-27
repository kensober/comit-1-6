import { TestBed } from '@angular/core/testing';
import { UsersList } from './users-list';

describe('UsersList', () => {
  it('relaciona los 30 usuarios con sus 60 publicaciones sin perder registros', () => {
    const component = new UsersList();
    expect(component.users.length).toBe(30);
    expect(component.posts.length).toBe(60);
    const matchedIds: number[] = [];
    for (const user of component.users) {
      const posts = component.postsForUser(user.id);
      expect(posts.length).toBeGreaterThan(1);
      expect(posts.every((post) => post.userId === user.id)).toBe(true);
      matchedIds.push(...posts.map((post) => post.id));
    }
    expect(new Set(matchedIds).size).toBe(60);
    expect(component.postsForUser(-1)).toEqual([]);
  });

  it('muestra el estado vacío si un usuario no tiene publicaciones', async () => {
    await TestBed.configureTestingModule({ imports: [UsersList] }).compileComponents();
    const fixture = TestBed.createComponent(UsersList);
    fixture.componentInstance.posts = [];
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelectorAll('.card').length).toBe(30);
    expect(fixture.nativeElement.textContent).toContain('Este usuario no tiene publicaciones.');
  });
});
