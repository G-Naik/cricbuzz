
interface TeamPlayer{
    name:string,
    role:string,
    team:string
}

const teamData = {
    playingXI: [
      { name: 'Matthew Short', role: 'Batter', team: 'Australia' },
      { name: 'Abdullah Shafique', role: 'Batter', team: 'Pakistan' },
      { name: 'Jake Fraser-McGurk', role: 'Batter', team: 'Australia' },
      { name: 'Saim Ayub', role: 'Batter', team: 'Pakistan' },
      { name: 'Steven Smith', role: 'Batter', team: 'Australia' },
      { name: 'Babar Azam', role: 'Batter', team: 'Pakistan' },
      { name: 'Josh Inglis (WK)', role: 'WK-Batter', team: 'Australia' },
      { name: 'Mohammad Rizwan (C & WK)', role: 'WK-Batter', team: 'Pakistan' },
      { name: 'Marnus Labuschagne', role: 'Batter', team: 'Australia' },
      { name: 'Kamran Ghulam', role: 'Bowling Allrounder', team: 'Pakistan' },
      { name: 'Glenn Maxwell', role: 'Batting Allrounder', team: 'Australia' },
      { name: 'Agha Salman', role: 'Batting Allrounder', team: 'Pakistan' },
      { name: 'Aaron Hardie', role: 'Bowling Allrounder', team: 'Australia' },
      { name: 'Irfan Khan', role: 'Batting Allrounder', team: 'Pakistan' },
    ],
    bench: [
      { name: 'Sean Abbott', role: 'Bowling Allrounder', team: 'Australia' },
      { name: 'Faisal Akram', role: 'Batter', team: 'Pakistan' },
      { name: 'Marcus Stoinis', role: 'Bowling Allrounder', team: 'Australia' },
      { name: 'Haseebullah Khan', role: 'WK-Batter', team: 'Pakistan' },
    ],
    supportStaff: [
      { name: 'Andrew McDonald', role: 'Head Coach', team: 'Australia' },
      { name: 'Jason Gillespie', role: 'Head Coach', team: 'Pakistan' },
      { name: 'Andre Borovec', role: 'Assistant Coach', team: 'Australia' },
    ],
  };


  type teamList = {
    data:TeamPlayer[]
  }

  const Avatar = () => {
    return(
        <div className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full mr-3 font-bold">
                            N
        </div>
    )
  }

const page = () => {

    const CardData = ({data}:teamList) => {
        return(
            <div className="grid grid-cols-2 gap-4 mb-8">
                {data.map((player, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                    <div className="flex items-center">
                        <div>
                            <Avatar/>
                        </div>
                        <div className="text-[12px]">{player.name}</div>
                    </div>
                    <div className="text-gray-500 text-[12px]">{player.role}</div>
                </div>
                ))}
            </div>
        )
    }

  return (
    <div className="container mx-auto p-4">
            <h1 className="text-center text-2xl">Playing X1</h1>
            <div className="container mx-auto mb-4">
                <CardData data={teamData.playingXI}/>
            </div>
            <div>
                <h1 className="text-center text-2xl">Bench</h1>
                <CardData data={teamData.bench}/>
            </div>
            <div>
                <h1 className="text-center text-2xl" >Support Staff</h1>
                <CardData data={teamData.supportStaff}/>
            </div>
    </div>
  )
}
export default page