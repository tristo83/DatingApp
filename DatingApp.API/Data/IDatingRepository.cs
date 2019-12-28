using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{
    public interface IDatingRepository
    {
      void add<T>(T enity) where T: class;
      void Delete<T>(T enity) where T: class;

      Task<bool> SaveAll();

      Task<IEnumerable<User>> GetUsers();
      Task<User> GetUser(int id);
    }
}